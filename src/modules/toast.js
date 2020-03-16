import React from 'react'
import { toast } from 'react-toastify'
import { css } from 'glamor'
import Toast from '../components/Toast'
import { Icon } from '@iconify/react'
import baselineClose from '@iconify/icons-ic/baseline-close'

const Close = ({ closeToast }) => <Icon icon={baselineClose} color="#d0cdcd" width="20" onClick={closeToast} />

const customToast = {
  success(msg, options = {}) {
    return toast.success(<Toast type="success" message={msg} />,
      {
        ...options,
        autoClose: 6900,
        closeButton: <Close />,
        progressClassName: css({
          backgroundColor: '#34a853 !important',
          height: '3px !important'
        })
      }
    )
  },
  error(msg, options = {}) {
    return toast.error(<Toast type="error" message={msg} />,
      {
        ...options,
        autoClose: false,
        closeButton: <Close />
      }
    )
  },
  info(msg, options = {}) {
    return toast.info(<Toast type="info" message={msg} />,
      {
        ...options,
        autoClose: 6900,
        closeButton: <Close />,
        progressClassName: css({
          backgroundColor: '#0f73ee !important',
          height: '3px !important'
        })
      }
    )
  }
}


export default customToast