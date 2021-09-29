import "./App.css";
import NavBar from "./components/navbar";
import TeacherList from "./components/teacherList";
import { Switch, Route, Redirect } from "react-router-dom";
import TeacherDetails from "./components/teacherDetails";

function App() {
  return (
    <div>
      <NavBar />
      <div className="content">
        <Switch>
          <Route path="/teacherList" component={TeacherList} />
          <Route path="/teacherDetails/:id" component={TeacherDetails} />
          <Redirect from="/" to="/teacherList" />

          {/* <Route
            path="/products"
            render={(props) => <Products newsetProduct={"aamer"} {...props} />}
          />
          <Route path="/posts/:year?/:month?" component={Posts} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" exact component={Home} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/messages" to="/posts" />
          <Redirect to="/not-found" /> */}
        </Switch>
      </div>
    </div>
  );
}

export default App;
