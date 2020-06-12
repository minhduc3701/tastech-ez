export const parseString = str => {
  if (typeof document === 'undefined') {
      return str
    }
  let div = document.createElement('div')
  div.innerHTML = str
  return div.textContent || div.innerText
}

export const findOrder = str => {
  if (!str || typeof document === 'undefined') {
      return 0
    }
  let div = document.createElement('div')
  div.innerHTML = str
  let order = div.getElementsByTagName('code')[0]
  
  if (!order) {
    return 0
  }

  return order.getAttribute('data-order')
}

export const findSvg = str => {
  if (!str || typeof document === 'undefined') {
      return null
    }
  let div = document.createElement('div')
  div.innerHTML = str
  let firstImage = div.getElementsByTagName('svg')[0]
  
  if (!firstImage) {
    return null
  }

  return firstImage.outerHTML
}

export const findImg = str => {
  if (!str || typeof document === 'undefined') {
      return null
    }
  let div = document.createElement('div')
  div.innerHTML = str
  let firstImage = div.getElementsByTagName('img')[0]

  if (!firstImage) {
    return null
  }
  
  return firstImage.outerHTML
}