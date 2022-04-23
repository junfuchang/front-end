import PropTypes from 'prop-types'
import React from 'react'
import { connect } from "react-redux"
import { countAsyncAdd, countSub } from '../../redux/action/count'

function Count(props) {
  const {countAsyncAdd,countSub} = props
  return (
    <>
        <button onClick={()=>countAsyncAdd(2)}>点我异步加2</button>
        <button onClick={()=>countSub(1)}>点我同步减1</button>
    </>
  )
}
Count.propTypes = {
  countAsyncAdd:PropTypes.func,
  countSub:PropTypes.func,
}

export default connect(state=>({state}),{
  countAsyncAdd,
  countSub
})(Count)