import Loader from 'react-loader-spinner'

import './index.css'

const LoaderContainer = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
)

export default LoaderContainer