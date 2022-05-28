const index = () => <div></div>;
export default index;

export const getServerSideProps = async function ({
}) {

	return {
		redirect: {
			destination: '/about/who-we-are',
			permanent: false,
		},
	}
}