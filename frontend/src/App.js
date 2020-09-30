import React from 'react';
import { BrowserRouter as Router,Route,Switch} from "react-router-dom";
import './App.css';
import NavbarTwo from './components/NavbarTwo';
import NavbarOne from './components/NavbarOne';
import StatsCarousal from './components/StatsCarousal';
import StatsIntroduction from './components/StatsIntroduction';
import StatsAbout from './components/StatsAbout';
import StatsContact from './components/StatsContact';
import Footer from './components/Footer';
import StatsDescription from './components/StatsDescription';
import StatsDashboard from './components/StatsDashboard';
import StatsLHBManu from './components/StatsLHBManu';
import StatsLayout from './components/StatsLayout';
import StatsTables from './components/StatsTables';
import StatsImpleArchi from './components/StatsImpleArchi';
import StatsMoreDetails from './components/StatsMoreDetails';
import ListSoftDesign from './components/ListSoftDesign';
import ViewSoftwareDesign from './components/ViewSoftwareDesign';
import AddSoftDesign from './components/AddSoftDesign';
import ListHardDesign from './components/ListHardDesign';
import ViewHardwareDesign from './components/ViewHardwareDesign';
import AddHardDesign from './components/AddHardDesign';

import ListSoftMes from './components/ListSoftMes';
import ViewSoftwareMes from './components/ViewSoftwareMes';
import AddSoftMes from './components/AddSoftMes';

import ListHardMes from './components/ListHardMes';
import ViewHardwareMes from './components/ViewHardwareMes';
import AddHardMes from './components/AddHardMes';
import ListBudget from './components/ListBudget';
import ViewBudget from './components/ViewBudget';
import AddBudget from './components/AddBudget';
import ListEmployee from './components/ListEmployee';
import ViewEmployee from './components/ViewEmployee';
import AddEmployee from './components/AddEmployee';
import ListMeeting from './components/ListMeeting';
import ViewMeeting from './components/ViewMeeting';
import AddMeeting from './components/AddMeeting';
import ListUpdate from './components/ListUpdate';
import ViewUpdate from './components/ViewUpdate';
import AddUpdate from './components/AddUpdate';

import ListMeetingRUTAG from './components/ListMeetingRUTAG';
import ViewMeetingRUTAG from './components/ViewMeetingRUTAG';
import AddMeetingRUTAG from './components/AddMeetingRUTAG';
import ListUpdateRUTAG from './components/ListUpdateRUTAG';
import ViewUpdateRUTAG from './components/ViewUpdateRUTAG';
import AddUpdateRUTAG from './components/AddUpdateRUTAG';

import ListComponent from './components/ListComponent';
import ViewComponent from './components/ViewComponent';
import AddComponent from './components/AddComponent';
import ListNewEmployee from './components/ListNewEmployee';
import RequestList from './components/RequestList';
import RequestAccess from './components/RequestAccess';


function App() {
  return (
    <div className="App">
      
      <Router>
      <NavbarOne></NavbarOne>
      <StatsCarousal></StatsCarousal>
      <NavbarTwo></NavbarTwo>
      
        <Switch>
          <Route path="/" exact component={StatsIntroduction}/>
          <Route path="/about"  component={StatsAbout}/>
          <Route path="/contact" component={StatsContact}/>
          <Route path="/description" component={StatsDescription}/>
          <Route path="/dashboard" component={StatsDashboard}/>
          <Route path="/moredetails" component={StatsMoreDetails}/>
          <Route path="/LHBManufacture" component={StatsLHBManu}/>
          <Route path="/tables" component={StatsTables}/>
          <Route path="/implementation" component={StatsImpleArchi}/>
          <Route path="/layout" component={StatsLayout}/>
          <Route path="/softwareDesign" component={ListSoftDesign}/>
          <Route path="/viewSoftwareDesign/:id" component={ViewSoftwareDesign}/>
          <Route path="/addSoftDesign" component={AddSoftDesign}/>

          <Route path="/hardwareDesign" component={ListHardDesign}/>
          <Route path="/viewHardwareDesign/:id" component={ViewHardwareDesign}/>
          <Route path="/addHardDesign" component={AddHardDesign}/>

          <Route path="/softwareMes" component={ListSoftMes}/>
          <Route path="/viewSoftwareMes/:id" component={ViewSoftwareMes}/>
          <Route path="/addSoftMes" component={AddSoftMes}/>

          <Route path="/hardwareMes" component={ListHardMes}/>
          <Route path="/viewHardwareMes/:id" component={ViewHardwareMes}/>
          <Route path="/addHardMes" component={AddHardMes}/>

          <Route path="/budget" component={ListBudget}/>
          <Route path="/viewBudget/:id" component={ViewBudget}/>
          <Route path="/addBudget" component={AddBudget}/>
          
          
          <Route path="/pastEmployee" component={ListEmployee}/>
          <Route path="/presentEmployee" component={ListNewEmployee}/>
          <Route path="/viewEmployee/:id" component={ViewEmployee}/>
          <Route path="/addEmployee" component={AddEmployee}/>

          <Route path="/update" component={ListUpdate}/>
          <Route path="/viewUpdate/:id" component={ViewUpdate}/>
          <Route path="/addUpdate" component={AddUpdate}/>

          <Route path="/meeting" component={ListMeeting}/>
          <Route path="/viewMeeting/:id" component={ViewMeeting}/>
          <Route path="/addMeeting" component={AddMeeting}/>

          <Route path="/updateRUTAG" component={ListUpdateRUTAG}/>
          <Route path="/viewUpdateRUTAG/:id" component={ViewUpdateRUTAG}/>
          <Route path="/addUpdateRUTAG" component={AddUpdateRUTAG}/>

          <Route path="/meetingRUTAG" component={ListMeetingRUTAG}/>
          <Route path="/viewMeetingRUTAG/:id" component={ViewMeetingRUTAG}/>
          <Route path="/addMeetingRUTAG" component={AddMeetingRUTAG}/>

          <Route path="/component" component={ListComponent}/>
          <Route path="/viewComponent/:id" component={ViewComponent}/>
          <Route path="/addComponent" component={AddComponent}/>
          
          <Route path="/seeRequests" component={RequestList}/>
          <Route path="/makeRequest" component={RequestAccess}/>



         

        </Switch>
        <Footer></Footer>
      </Router>
      
      
    </div>
  );
}

export default App;
