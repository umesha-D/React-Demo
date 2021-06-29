import Todo from './Components/Todo';

function App() {
      return (
        <div style={{display: "flex", flexDirection: "row", alignItems: "flex-start"}}>
		<div style={{flex: 1, backgroundColor: "red"}}>
          		<h1>My Todos</h1>
          		<Todo />
          		<Todo />
          		<Todo /> 
          		<Todo />
          		<Todo />
          		<Todo /> 	
        	</div> 
		<div style={{flex: 3, backgroundColor: "blue"}}>
			sdsds
		</div>  

	</div>
      ); 
  }

export default App;
