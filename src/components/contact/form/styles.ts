import exp from 'constants';
import styled from 'styled-components'



export const Container = styled.div`
 margin:80px;   

form{
font-family: Montserrat, arial, sans-serif;
display: flex;
flex-direction: column;
align-items: center;
height: 100%;
width: 100vw;
margin: 0 auto;
max-width: 98%;  
background-color: inherit;

 }

@media (max-width:700px){
    margin:20px;
    
}
`;


export const Title = styled.div`
width:100%;

h1{
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: 2.5rem;
color: #021F3E;
margin-top: 30px;
text-align:center;



}  
`;

export const Data = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
margin: 0 auto;
gap: 3px;
background-color: inherit;

input{
font-family: Montserrat, arial, sans-serif;
margin-top: 1.25rem;
outline: none;
padding: 1rem;
width: 100%;
border: 1px solid #E2E2E2;
border-radius: 0.625rem;
background-color: inherit;

} 

textarea {
font-family: Montserrat, arial, sans-serif;
margin-top: 1.25rem;
outline: none;
padding: 1rem;
width: 100%;
border: 1px solid #E2E2E2;
border-radius: 0.625rem;
margin-bottom: 2rem;

}



input:hover{
transition: 0.8s;
transform: scale(1.03);
}

textarea:hover{
transition: 0.8s;
transform: scale(1.03);
}


`;

export const FirstButton = styled.div`
button{
    width: 9.5rem;
    height: 3.2rem;
    background-color: #021F3E;
    color: #FFF;
    border-radius: 0.65rem;
    font-size: 0.95rem;
    outline: none;
    cursor: pointer;
    padding: 0.65rem;
    margin-top: 10px;
    border: none;
    
   

   button:hover{
    transition: 0.8s;
    transform: scale(1.05);
   }

   @media (max-width: 425px){
button{ 


  margin-bottom: 10px;
}

}
}
`;


export const GooglePrivacy = styled.div`
.privacidade{
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: Montserrat, Arial, sans-serif;
font-size: 0.69rem;
color: #595959;
margin-top: 40px;
margin-bottom: 35px;
text-decoration: none; 
padding: 5px;
text-align: center;

@media (max-width: 460px){

margin-top: 10px;
}
}


`; 

export const WhatsappButton = styled.div`
width: 100%;
display:flex;
align-items:center;
justify-content: center;
`

  
export const SecondButton = styled.div`
.mensagem{
display: flex;
justify-content: space-around;
align-items: center;
width: 12.5rem;
height: 3.125rem;
background-color: #021F3E;
color: #FFF;
border-radius: 0.625rem;
border: none;
font-size: 0.94rem;
outline: none;
cursor: pointer;
padding: 0 15px;
margin: 30px;
}

button:hover{
transition: 0.8s;
transform: scale(1.05);
}
`;

export const Name = styled.div`
.name{
    text-align: center;
    color: #1B1B1B;
    font-size: 1.38rem;
    font-weight: 400;
    margin: 10px;
}
`;

export const Address = styled.div`
.endereco{
    color: #021F3E;
    font-size: 1.25rem;
    margin: 25px 0 10px 0;
    text-align: center;
    
}
`;

export const Email = styled.div`

max-width: 100%;

a{
    display: flex;
    align-content: center;
    justify-content: center;
    color: #021F3E;
    text-decoration: none;
    max-width: 100%;   
    padding: 10px;
    
@media(max-width:460px) {
    
    font-size: 12px;
}
    
}
`;

export const Map = styled.div`
margin-top: 2.5em;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
margin: 0;
padding: 10px;
border: none;



`;



export const Button = styled.button`
width:50px;
border: none;
font-size: 60px;
margin-top: 60px;
background-color: transparent;
color: green;

`

