import PropTypes from 'prop-types'
import React from 'react'
import { connect } from "react-redux"
import { changeTitle1, changTitle2 } from '../../redux/action/title'

function Title(props) {
  const {title,num,title1,title2,render } = props
  return (
  <>
    <h1>{`标题是${title},数值是${num}`}</h1>
    <button onClick={()=>title1()}>点我切换标题1</button>
    <button onClick={()=>title2()}>点我切换标题2</button>
    {render()}
  </>
  )
}
Title.propTypes={
  title:PropTypes.string,
  num:PropTypes.number,
  title1:PropTypes.func,
  title2:PropTypes.func,
  render:PropTypes.func,
}


export default connect(state=>({
  title:state.theTitle,
  num:state.number,
}),{
  title1:changeTitle1,
  title2:changTitle2,
})(Title)