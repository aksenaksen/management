import React,{Component} from 'react';
import Customer from'./components/Customer'
import './App.css';

const customers =[{
  'id':1,
  'image':'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'birthday': '000817',
  'gender':'남자',
  'job':'무직'
},
{
  'id':2,
  'image':'https://placeimg.com/64/64/2',
  'name': '체윤서',
  'birthday': '000617',
  'gender':'여자',
  'job':'무직'
},
{
  'id':3,
  'image':'https://placeimg.com/64/64/3',
  'name': '문지웅',
  'birthday': '000817',
  'gender':'남자',
  'job':'무직'
}]

class App extends Component
{
  render(){
    return (
    <div>
      {customers.map(member=>{
        return(
          <Customer
          key={member.id}/*key라는 props 꼭 사용해주기*/ 
          id={member.id}
          image={member.image}
          name={member.name}
          birthday={member.birthday}
          gender={member.gender}
          job={member.job}
          />
        )
      })}
    </div>
  );
}
}

export default App;
