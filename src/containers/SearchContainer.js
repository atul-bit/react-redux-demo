import Search from '../common/components/Search'
import {connect} from 'react-redux'
import {addToCart,removeFromCart,commonSearch} from '../service/actions/commonSearchActions'

const mapStateToProps=state=>({
    // data:state.cardItems
})
const mapDispatchToProps=dispatch=>({

        searchData:data=>dispatch(commonSearch(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(Search)
