export function getTestAnswers() {
  return [
    {
      answerId: 'ans45655',
      answerTitle: 'square',
      response: 'rsp34459'
    },
    {
      answerId: 'ans34567',
      answerTitle: 'circle',
      response: 'rsp34564'
    },
    {
      answerId: 'ans33456',
      answerTitle: 'triangle',
      response: 'rsp37834'
    }
  ]
}

export function getTestPossibleResponses() {
  return ['rsp34459', 'rsp37856', 'rsp34564', 'rsp37834', 'rsp37234']
}
export function getPossibleResponses() {
  return {
    rsp34459: (
      <div id='response_square' className='response-option'>
        <svg width='104' height='104'>
          <rect width='100' height='100' strokeWidth='0' fill='#4ec946' />
        </svg>
      </div>
    ),
    rsp37856: (
      <div className='response-option'>
        <svg width='104' height='104'>
          <ellipse cx="50" cy="50" rx="50" ry="30" strokeWidth='0' fill='#4ec946' />
        </svg>
      </div>
    ),
    rsp34564: (
      <div className='response-option'>
        <svg width='104' height='104'>
          <circle cx='52' cy='52' r='50' strokeWidth='0' fill='#4ec946' />
        </svg>
      </div>
    ),
    rsp37834: (
      <div className='response-option'>
        <svg width='104' height='104'>
          <polygon points='50,0 0,100 100,100' strokeWidth='0' fill='#4ec946' />
        </svg>
      </div>
    ),
    rsp37234: (
      <div className='response-option'>
        <svg width='104' height='104'>
          <rect x="0" y="20" width='100' height='60' strokeWidth='0' fill='#4ec946' />
        </svg>
      </div>
    )
  }
}