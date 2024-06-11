function Role(props){

  // const {welcome} = props
  // const {emoji}=props
  const {intro} = props;
  const {welcome,emoji} = intro;

  const introduction=`Hi,I am the manager ${welcome} ${emoji}`;
  
  return(
      <h2>{introduction}</h2>
    )
}
 export default Role;