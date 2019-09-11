import './test.scss';


const hello = () => {
    const root = document.getElementById('root');
    root.innerHTML = 'Hello World!';
    console.log('hello user');
};

hello();


const deepDeepArray = [
    '≥0 — первый уровень',
    [
      '≥1 — второй уровень',
      [
        '≥2 — третий уровень',
        [
          '≥3 — четвёртый уровень',
          [
            '≥4 — пятый уровень'
          ]
        ]
      ]
    ]
  ]

console.log(deepDeepArray.flat());
