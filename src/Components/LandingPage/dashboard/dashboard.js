import React from 'react';


const Dashboard = () => {
    return (
       
        <div>
            
    {/* <input type="checkbox" id="check"></input> */}
   
    <header>
      <label for="check">
        <i className="fas fa-bars" id="sidebar_btn"></i>
      </label>
      <div className="left_area">
        <h3>Coding <span>Snow</span></h3>
      </div>
      <div class="right_area">
        <a href="/" className="logout_btn">Logout</a>
      </div>
    </header>
   
    <div class="sidebar">
      <div>
        <img src="" className="profile_image" alt="alt"/>
        <h4>Jessica</h4>
      </div>
      <a href="/"><i className="fas fa-desktop"></i><span>Dashboard</span></a>
      <a href="/"><i className="fas fa-cogs"></i><span>Components</span></a>
      <a href="/"><i className="fas fa-table"></i><span>Tables</span></a>
      <a href="/"><i className="fas fa-th"></i><span>Forms</span></a>
      <a href="/"><i className="fas fa-info-circle"></i><span>About</span></a>
      <a href="/"><i className="fas fa-sliders-h"></i><span>Settings</span></a>
    </div>
   

    {/* <div class="content"></div> */}

        </div>
       
       
    );
};

export default Dashboard;