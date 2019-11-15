import React from 'react';

export default class PhotoUploader extends React.Component{

    constructor(props){
        super(props);
        this.state = {
         imgs:[],
         x1:null,
         y1:null,
         height:null,
         width:null
        }
    }
   
    handleChange(event){
      this.setState({
          imgs:event.target.files
      });
      const canvas=this.refs.canvas;
      const ctx=canvas.getContext("2d");
      const image=new Image();
      image.height=400;
      image.width=400;
      image.onload=()=>{
        ctx.drawImage(image,0,0, image.height, image.width);
      }
      image.src=URL.createObjectURL(event.target.files[0]) 
   }

   drawRect(){
     const canvas=this.refs.canvas;
     const ctx=canvas.getContext("2d");
     ctx.beginPath();
     ctx.strokeStyle="green";
     ctx.rect(this.state.x1, this.state.y1, this.state.width, this.state.height);
     ctx.stroke();    
   }

   render(){
      return (
         <div className="row">
              <div className="col s6">
                <input type="file" ref="file" onChange={(e)=>this.handleChange(e)} />
                <canvas ref="canvas" width="400" height="400" onClick={()=>this.drawRect()}></canvas>
                {
                this.state.imgs && <i>Please Click on the image after providing the parameter to draw bounding box</i>
                }
              </div>
              <div className="col s6">
                 <b>X1</b> <input type="number" placeholder="Enter x1" value={this.state.x1} onChange={(e)=>this.setState({x1:e.target.value})}/>
                 <b>Y1</b> <input type="number" placeholder="Enter y1" value={this.state.y1} onChange={(e)=>this.setState({y1:e.target.value})}/>
                 <b>Height</b><input type="number" placeholder="Enter height" value={this.state.x2} onChange={(e)=>this.setState({height:e.target.value})}/>
                 <b>Width</b> <input type="number" placeholder="Enter width" value={this.state.y2} onChange={(e)=>this.setState({width:e.target.value})}/>
              </div>            
          </div>
      );   
   }

}