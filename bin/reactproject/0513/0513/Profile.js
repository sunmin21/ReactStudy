export default function Profile(props){
	const id = props.match.params.id;
	console.log(id, typeof id)
	return( 
		<>
			<div>Profile page</div>
			<p>idë {id}ìëë¤.</p>
		</>
		);
}