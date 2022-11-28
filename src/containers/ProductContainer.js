import Products from '../components/Products'
import {connect} from 'react-redux'

const mapStateToProps=state=>({
    data:state.commonSearchResult
})
const mapDispatchToProps=dispatch=>({


})
export default connect(mapStateToProps,mapDispatchToProps)(Products)
// export default Home;
