<template lang="pug">
div
  canvas
  div.window
    div.pane1.pane 
      h1 1
    div.pane2.pane 
      h1 2
    div.pane3.pane 
      h1 3
    div.pane4.pane 
      h1 4
    div.pane5.pane 
      h1 5
    div.pane6.pane 
      h1 6
    div.pane7.pane 
      h1 7
    div.pane8.pane 
      h1 8
    div.pane9.pane 
      h1 9



</template>

<script>

export default {


  }



</script>

<style lang="scss">

canvas{

position:absolute;
height:100vh;
width:100%;
margin:0;
padding:0;
}


html body{
  margin:0;
}
.window {
  display:grid;
  height:100vh;

  grid-template-columns: 1fr 1fr 1fr ;
  grid-template-rows: 1fr 1fr 1fr ;

} 

.pane{
  display:flex;
  justify-content: center;
  align-items:center;
  
  color:rgba(255,255,255,0.8);
  
  
  transition:0.7s all;
}


.pane1{

grid-area: 1 / 1 / 1 / 1;
background: linear-gradient(to top, hsl(240, 100%, 9%), #1cb5e0); 


}

.pane2{
grid-area: 1 / 2 / 1 / 2;
background: linear-gradient(to top, hsl(240, 100%, 9%), #1cb5e0); 

}
.pane3{
grid-area: 1 / 3 / 1 / 3;
background: linear-gradient(to bottom, #141e30, #243b55); 


}

.pane4{
grid-area: 2 / 1 / 2 / 1;
background: linear-gradient(to top, #52c234, hsl(104, 100%, 9%)); 


}
.pane5{

grid-area: 2 / 2 / 2 / 2;
background: linear-gradient(to top, #52c234, hsl(104, 100%, 9%)); 

}
.pane6{
grid-area: 2 / 3 / 2 / 3;
background: linear-gradient(to top, #141e30, #243b55); 

}
.pane7{

grid-area: 3 / 1 / 3 / 1;
background: linear-gradient(to top, #333333, #dd1818); 

}
.pane8{

grid-area: 3 / 2 / 3 / 2;
background: linear-gradient(to top, #333333, #dd1818); 


}
.pane9{
grid-area: 3 / 3 / 3 / 3;
background: linear-gradient(to top, #333333, #dd1818); 


}


</style>
