import Users from '../components/Users'
import {connect} from 'react-redux'

const mapStateToProps=state=>({
    data:state.commonSearchResult
})
const mapDispatchToProps=dispatch=>({


})
export default connect(mapStateToProps,mapDispatchToProps)(Users)
// export default Home;
