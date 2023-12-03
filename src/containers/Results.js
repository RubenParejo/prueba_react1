import { useContext, useMemo, useCallback } from 'react';
import TestsContext from '../context/testsContext';
import { useNavigate } from 'react-router-dom';

import Header from '../components/header';
import { getPossibleResponses, getTestAnswers } from '../utils/fakeapi';

import '../css/Test.scss';

function Results() {
  const { contextState, setContextState } = useContext(TestsContext);
  const navigate = useNavigate();

  const testAnswers = useMemo(() => getTestAnswers(), []);
  const possibleResponses = useMemo(() => getPossibleResponses(), []);

  const returnAnswer = useCallback((answer) => {
    if (!contextState.tests.results[answer.answerId])
      return false;

    const response = contextState.tests.results[answer.answerId];
    const isValid = answer.response === response;

    return (
      <div key={answer.answerId} className={`answer ${isValid ? 'valid' : 'invalid'}`}>
        <p className='answer-title'>{answer.answerTitle}</p>
        <div className='answer-placeholder'>
          {possibleResponses[response]}
        </div>
      </div>
    )
  }, [contextState.tests.results, possibleResponses]);

  const resetResponses = () => {
    setContextState({ tests: { results: {}, done: false }});
    navigate(`/`);
  };

  return (
    <div className='test'>
      <Header />
      <div className='content test-wrapper'>
        {testAnswers.map(answer => {
          return returnAnswer(answer)
        })}
      </div>
      <div className='bottom-bar exercise-resources'>
        <div className='exercise-content'>
          <div className="exercise-actions">
            <div className='button secondary' href='#' onClick={() => resetResponses()}>Reiniciar</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
