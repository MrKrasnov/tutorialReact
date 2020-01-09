import {rerender} from '../render';
let state = {
    MyProfile: [
        { "user":"Taylor", "avatar":"https://i.pravatar.cc/300?img=12" }
    ],
    MyMessageId: [
        { "id":"9333000183103",  "created_at":"2019-08-18 10:23:00", "message":"I have! Let’s discuss it)" },
        {"id":"9333000183108",  "created_at":"2019-08-18 10:35:57", "message":"OK :)" }
    ],
    users: [
        { "user":"Kate", "avatar":"https://i.pravatar.cc/300?img=5" },
          { "user":"Dave", "avatar":"https://i.pravatar.cc/300?img=14"},
         {"user":"Kim", "avatar":"https://i.pravatar.cc/300?img=31" }
           ],
    message: [
        { "id":"9333000183101", "created_at":"2019-08-17 23:30:11", "message":"Hey, guys! Have you seen the new episode of 'Black Mirror'?" },
        { "id":"9333000183102",  "created_at":"2019-08-17 23:54:45", "message":"Nay, not yet:-(" },
       {"id":"9333000183104",  "created_at":"2019-08-18 10:24:32", "message":"No spoilers!!! I will watch it asap." },
       {"id":"9333000183105", "created_at":"2019-08-18 10:29:03", "message":"Oh, Dave! But please, hurry up!" },
      { "id":"9333000183106",  "created_at":"2019-08-18 10:34:47", "message":"I have to finish my work and afterwards I will watch it." },
       { "id":"9333000183107", "created_at":"2019-08-18 10:35:19", "message":"Oh… I'll go see ‘The Boys’ while Dave is busy." },
       { "id":"9333000183109", "created_at":"2019-08-18 10:37:50", "message":"Alright, Dave. We’ll wait until you finish your work." }
       
    ]

}

export let addMessage = (postMessageId) => {
    let newMessage ={
        id: 5,
        created_at: 2019,
        message: postMessageId
        
    };
    state.MyMessageId.push(newMessage);
    rerender(state);
}


export default state