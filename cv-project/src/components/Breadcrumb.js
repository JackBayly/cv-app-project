import React from 'react';
import '../styles.css';
class Breadcrumb extends React.Component {
 
  //make validation for inputs later
  render() {
    return (
        <ul class="breadcrumb">
        <li><a href="#">Step 1</a></li>
        <li><a href="#">Step 2</a></li>
        <li><a href="#">Step 3</a></li>
        <li><a href="#">Step 4</a></li>    
      </ul>
    );
  }
}
export default Breadcrumb;