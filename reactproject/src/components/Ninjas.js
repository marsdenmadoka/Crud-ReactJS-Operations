import React, { Component } from 'react'; //for class component
//import React from 'react'; //for functional component


//class component 
class Ninjas extends Component{
    render(){

        // const { name,age,belt}=this.props
        const {ninjas} =this.props;
        const {deleteNinja} =this.props;

        const ninjaList=ninjas.map(ninja=>{
            if(ninja.age>20){
            return (
                <div className="ninja" key={ninja.id}>
              {/* using props  */}
                <div>Name:{ninja.name}</div>
                <div>Age:{ninja.age}</div>
                <div>Belt:{ninja.belt}</div>
                <button onClick={() =>{deleteNinja(ninja.id)}}>deleteNinja</button>{/* use of annoymous function */}
               </div>
            )
        }else{
            return null
        }
        })
      return (
       <div className="ninja-list">
       {ninjaList}
        </div>

    //     <div className="ninja">
    //      <div>yourName:Ryu</div>
    //      <div>yourAge:30</div>
    //      <div>yourBelt:Black</div>

    //   {/* using props */}
    //      <div>Name:{name}</div>
    //      <div>Age:{age}</div>
    //      <div>Belt:{belt}</div>
    //     </div>
      );
    }
  }

    
//functional component

//   const Ninjas=(props) => {
//         // const { name,age,belt}=this.props
//         const {ninjas} =props;
//         const ninjaList=ninjas.map(ninja=>{
//             return (
//                 <div className="ninja" key={ninja.id}>
//               {/* using props  */}
//                 <div>Name:{ninja.name}</div>
//                 <div>Age:{ninja.age}</div>
//                 <div>Belt:{ninja.belt}</div>
//                </div>
//             )
//         })
//       return (
//        <div className="ninja-list">
//        {ninjaList}
//         </div>
//       );
//     }
  export default Ninjas;