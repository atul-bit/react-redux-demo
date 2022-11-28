import Table from '../common/components/Table'
import {connect} from 'react-redux'
import { bulkEdit } from '../service/actions/bulkEdit'

const mapStateToProps=state=>({
    // data:state.cardItems
})
const mapDispatchToProps=dispatch=>({

    addBulkEditData:data=>dispatch(bulkEdit(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(Table)
// export default Home;
