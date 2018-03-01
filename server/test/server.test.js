const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todos = [{
  text: 'first todo'
}, {
  text: 'second todo'
}];

beforeEach((done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
});

describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    const text = 'test Todo text';
    
    request(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .expect((response) => {
        expect(response.body.text).toBe(text);
      })
      .end((error, response) => {
        if (error) done(error);
        
        Todo.find({text}).then((todos) => {
          expect(todos[0].text).toBe(text);
          done();
        }).catch((error) => done(error));
      })
  });
  
  it('should not create todo with invalid body data', (done) => {
    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((error, response) => {
        if (error) done(error);
      
        Todo.find().then((todos) => {
          console.log(response.body);
          
          expect(todos.length).toBe(2);
          done();
        }).catch((error) => done(error));
      })
  });
});

describe('GET /todos', () => {
  it('should get all todos', (done) => {
    request(app)
      .get('/todos')
      .expect(200)
      .expect((res) => {
        expect(res.body.todo.length).toBe(2);
      })
      .end(done);
  });
});
