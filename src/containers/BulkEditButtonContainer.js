import BulkEdit from '../common/components/BulkEdit'
import {connect} from 'react-redux'

const mapStateToProps=state=>({
    data:state.bulkEdit
})
const mapDispatchToProps=dispatch=>({


})
export default connect(mapStateToProps,mapDispatchToProps)(BulkEdit)
// export default Home;
