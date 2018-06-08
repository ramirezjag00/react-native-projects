import React from 'react';
// https://www.npmjs.com/package/react-native-router-flux
// https://github.com/aksonov/react-native-router-flux/issues/3021
import { Router, Scene, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
	return (
		<Router sceneStyle={{ paddingTop: 65 }}>
			<Scene key="auth">
				<Scene key="login" component={LoginForm} title="Login" />
			</Scene>
 
			<Scene key="main">
				{/* the order matters if you didn't define an initial scene */}
				<Scene
					onRight={() => Actions.employeeCreate()}
					rightTitle="Add"
					key="employeeList"
					component={EmployeeList}
					title="Employees"
					initial
				/>
				<Scene
					key="employeeCreate"
					component={EmployeeCreate}
					title="Create Employee"
				/>
				<Scene
					key="employeeEdit"
					component={EmployeeEdit}
					title="Edit Employee"
				/>

			</Scene>
	</Router>
	);
};

export default RouterComponent;
