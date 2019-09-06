import './test.scss';
import User from './main';


const hello = () => {
    let root = document.getElementById('root')
    root.innerHTML = 'Hello World!';
    console.log('hello user');
};

hello();


const deep_deep_array = [
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

 console.log(deep_deep_array.flat());

const Vasiliy = new User('Vasiliy', 33);
Vasiliy.sayName();