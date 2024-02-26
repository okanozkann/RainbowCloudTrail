console.clear()
const c = document.querySelector('canvas')
const ctx = c.getContext('2d')
let cw = c.width = innerWidth
let ch = c.height = innerHeight
const imgs = []
const dust = Array(99)
const m = {x:0, y:0}
let currentIndex = 0
const imgData = ['data:image/png;base64,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', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABEBAMAAADOyF68AAAAJFBMVEVHcEz///////////////////////////////////////////8Uel1nAAAADHRSTlMAChMfRzDCiqJcc+CoT0BUAAAEJUlEQVR4AYWVWZajOBOFrVoBIjfwI/21gESlFaR4IB9TUg8b4HBOvjckCzAsgB7Eaw80WkBN3lzfwK4yzjE8259v3IhA0u4YHJEku1cjFQLQqwgDIyD0KgIme10mERQbBm/5c6k2OmzHssf2EhDp5o+cSyv4pRJPRZbxrT1d5NmFEOOp3H7FlHLGqssiuJAKBr55ufLeGI9enL44MUqtXyWcZzzV3oSxOAonSXKEUrkyDGbRSqELM4Yi252Yk8dcWZUnOwY4T6UzZTDFNTEcDtiRUdYqkQDxVkltzBRG+79jF1DviVErIzUY/7Mp4xKKa0Y6aXrKJRQiT2DWa63LUMYYw12yVvOtvDST3iuhHZ6Vh5u5bR5usixhHI0jhsqR3hTemcIqpUvkavuusDZDU6xIqDrCXTBmNKtOWZZx6GNBH3K/MlDZcVUuxgTo5GDCFNsuFNZrVJBzQiD1Tk+LKUdMAKMKYZ77LhgA3ltqN26cvXNzN5YG4X0Zp7kFM97JlSHPGEFyddt0o3FgChObrt0P3bTYleHZaSR6arq/DLIEM83DsK+qpvnLgpBqvbAgw93UxBFZ4oKyq2pf1f2M4tGzjK+NBuOnbincbdNHtK+uqo913zwUSis45mA4I52I/iBLPzdthaiHpruh+VCe1U/6YZoCSh7wWz0Aua+r/sFiVjQGQo5MjF1bffxIIh/v8dJ3N0hEAHHI9X+0tmmG+8OhOhCFZBjYeanAE3tfhu/Mx7WuGsPITzJUFTHT3De/EHN/gCnclxEMpvBd6j2Kmgc4qQ6Hw8d+QIHLNOYX60s6F2cqmqC6aYd+6OJ4zbaM0DqQDjKBie3Q9N0y5luGZUIb6g5USAfNxIyL6y1ylUupb5GgWj2jQiBeZduN7cqrXGFaw8fDR3gecGksv+aZ4Bsh6Qory7mHa6qr3lN3RIahb3ScudHl3Ax7pCIG8y+UEiI7M6kbC1xCqHl/oBbue3QQ+aVIzjoGQUy9h2Xq4GgMoM02xaQxWDAzLkFk65sOVbmy8Dbf7H/v3TiaEOO/+7pFg+MMHVpf+Rlh4oMJJixlSypLCWbBF16dGc5S7cw4xakdaqxhV05xdEDOqRjnXHljIjzDbbDaBVTltxsrT1OeKmd+H1D6EMdCato/cqX4mRFCpBD6HWMaMMk7oZy3Qgqx3dXBSO9gFVfEaK9p6wOxPQw4/UV6NBqOFmMzxlME354FTCBo+f+MDoUCDJWRZekFk+e50kWujQmjtxktgzQh4sKPUNoKoR0NifZ3RufmBmIwJBWK5dKvDGOns/CREDFCOu+J2fy8qYwLRQwao9CV5yLhPJVKwjgQakvyLEX5JGkh6KR5PmD9GJy/gEAKGTnkeMpfRE5iCLx9UYfurwCkg9a9FRBgb2DI9LYOEIZ4I9WLdv8DjsSxeJ9m1lwAAAAASUVORK5CYII=', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABIBAMAAACjNn5JAAAAJFBMVEVHcEz///////////////////////////////////////////8Uel1nAAAADHRSTlMALj4fTwoTY33FnvKTZWm1AAAFF0lEQVR4AaWWR5LbuBvF9Q/wHmCHNSBMXA0a05y1YFSxl2yryK0DTRzAxSqwvJ1AWicw1QdoiicYjS43D1TqOBHOxk8P73sfgib/ZmR/gSHu8s+hlKizdJL+mdSc8TcT8memlDQxqDQlGM/RObN2WgbRP9K6ZtaYswlUSBB8gsAKaa6Z9FPMPlsByV1KssJWIzWKPbKdTUgB366wWBFSB2MPKXU5mVNm+eXo/glf8zidzMVZ+s7YGcWKTxWZERXn+YWfld9XdnZi4gA9zIsoKtyFrK3Q5603iedZ9ljrhfTmrVw0VkZfDY31/kPsyMMC0vnHvrFVXQnBrlYD/pBRXJLsQWbvFn3jK2mNkFer/oNWjOqSpA+8n/dt21dUGuHrrn+ZFZRHZe7Ke97yb/t6MRgqq6t2AYrkimqnaPTmWF85+d+JTxbLSrB66Ffr/mVe0EjHSvD4QBUjhfm2Youu69af4V5QGinJ44O1t2fpvG5XXds29lOH0deNtdZE0Lo8UO+mCGK1Wg5Dj+VulkNzNSbGmaAHilyY7/7zsVsPw7AK6y0bc/WTrTxSEdNyT82ZOXu1WK27btl1N92yqYQ00vrKCHOkrqWJ3g/dZr1e3mxuun4WacqV9Kj4qEVUYvgPw2qzWXebzc3m85eu0Lpgiaco86CVW8PPhxtQ+LXp+ikSjQrmveDalcftYE2yuNksuw3GchYXCmkxayV3Lkv3FHKvFphfBepWa0Wl5YJTNs0w9p2+8N6DGrV++6A1pSwRLNIXuC6A7dTet0PzKZiHr1+nToGSPIp0FGODpVuMTN61QwsqBLa6PS0oVQB17GA9aO0KeFW3w9Ctu6G7Xfx0OmcUUKRLBwxK+aiVptegQhM/LWcnqJBRTaEVUovLbG8MWvUwtG27uKXwooCwgAVF5/I827Xoqm6bpvboSSBYSIEiCCF0EZegRvdvv6pbX9dN2FRCCCvC1gKOPwoNb+lWSyStx2g9MGMTE6hIn1ij4aAERFKSveXnbQ1fjbeVFYmvcOXkWqEBWukymH9RFppNT3y7aHHwRWJt0hhspbx8+1XFoVVmoYmaGUFP/GLosftEUiW1N4xHcaaSSkRapykBxSDMZIJDWMEW3NVecI4MQJnIlYSMWtJbbutV1/u68Si28YYqFikGar8Js/zEe5vUiN7DP2oYUxOaySpoZWSb1gU+n9Rt3261WguICipDKnQsEQMUZoOlKoi2DYqJWAjXSoFu7hp0jRlYU1JYVBfWQweFxA+MKHZbKpyWpJopITiaLA2ncG6lFQYU13v/hZLSz6gQhlEVGh1RzEuszGU4RWT3XiiGzMJnqZKgEATnMEUZtIrjrVNQwYVBSVTgJGIeBNcs/EbPDhQpFMWk1pRRDQWqIkajMREa7yFk67QCBIoDDxjFL61QZXnvMQvbXG/3qDGcjWXAX/zmyOAXqLBukMJGRPTIBCCgw8CuzV2hA8SElBUooKBceoQIOOIgBYxTNMGOg7Po/vePcCPMKQcEN+ipNIgM1F2GjJ3PFIMRrcf9IKKQ1xm5/8zirJMCRrRG/ViMxuFf8X0tXAcOHY0AOXQACZc5hMsHWq5wDvPaAQ6ScZrrKL7/bCOGuIwhVDjcWMgXcFYWh9wPLYqdLoDh0BCn42CU5Dhl6T2s0C5ouTdYhDi3e/EfPN2kCH2M9XgAs90Fnj6AQEHHuTTbVpw+930KTJ5tH/1nIWRRHiTS5yhCwMHI4efd8TtFae3YjWGFKAAAAABJRU5ErkJggg==', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABNBAMAAADOaY6cAAAAJFBMVEVHcEz///////////////////////////////////////////8Uel1nAAAADHRSTlMADyM5jGVQeaK3zfiFhrGSAAAFrklEQVR4Aa2WSXKsOhqFTa0AcVeAiMoaG0XyNqAM4Zo6Jd7YeihrAZLlBSjCwuPbQE6rTe4GXrO5OsAzbsJdNbKz/zhx9P/nV3D2f1oJOUs/ypKckI+yGaX5BxTPSJqeZWWZk3eN5gSKCXRp9h5MSkrBgH3PBQQZK9OzJCUF2PRttmDsHAjJClzzNguE5fObyrzBkhlhJZ3fULDkNZZk6cwyitfFw6t+M+glk+5kISO0YPSVChNSnJOEzB5SVKOkrISbF1FamvOUEJJV096STwyle9lvkmyMOccVBBD2hCpXSr9il1SNvEphudBMXiJjVev0+Ssb23p+mWeMFmUlJdpspNPly7pFK/g1tg6q8l4Z48VrbLI5cH7NjGaEbnjg3nvrXvGbFC2/lVurWF78UJ+GIKQHe/YKa53a8p3ON82fx7F3xkidk5fZrfXuUHPFDuJiPEVn4LnMX2aregj7GIPnwh57zv21MTpPkhfgT5Ud+ojVdaGOu4ZzJ6XG3L8w+YXZd6ch1t0wRB5Ua7lzCvlNASdnT9RJYdqLsee+7sbPqEDrhfeXsDCbeAonha5uTsFJXx+DVFVjfeMuJwMp6OeTUxZ/+RdYs737LPXWeyHdFUkSAnK1nCyJrErywzE4w4qb4K823julEEl4xT+gGSfpMudV+ae7z9iPPth4iUhMLZx0H7djjvMUWv3Hi785xEb/NOwajzdlTlICaXhI1yGbp2DrpL2VjUDj0AovjaYE6/dzaob/MLGYRGQSHdPSOvnj8XQrJYMsyShFn9N1eKfgpeST5THsEAbZXIzDbaPA5qRgDOxcuUm3LPAhIRteD593bI8s3p0Ccq8x8VlhwK5FQwVoMtWsjn3vWivUfuhx3U4qjXFSuGIikyVfZTkN+qE7xR5tE3IfA6/jrfcSPXH6IZcZ6kqh6pHZUFvfWrkPMdRdHPo6uGY3s+nSMEwjK9qmPv7262de7wxXLVT5MGKdwo3QdK3DfL6YvbgZf/3+rbG7FmxTd93x+2+//Tr+K97+Pp/pYkJXCHY9Yh4RgkZct83FMBx/wxphQ9FlZ+liArnmd+MQ+8/KtMI1thvH70BPyLMwCNDiAa4z2toA9tQfT5fYZGP5cWH/1UWOlqQECV6MZHTLI++P01Y0xXjw2I3DZLcHy9iUinvDhGzrGPA7WFVShk/xeILsLxwLZSCPTgmy2ddC1APGeMcoq9CLbgT7N2RYQDYDuxR4Cnpld9J2MaJCyLzkIYL9dddIaSALXRhYt7f1Zh9F3XMFuL0Jtvs+flatqjSFLlm7nCD8Gy8tahys00y3++BR7p0xCA/JKfBllglJsNGiAcqF5btJ98cYYP7ayKuJoyVYkDNc6ZI1U1xEU+80ZW2NqpyQGw8HeV5ge0vf0IpKKtPMh9gew1ZUUtg4DJ89D5cUcHGvCxY/GsmHvgu7yW61tbKJw9jHI0oIUcoePFAmUbBjH2+5uGatOnBnY0RsukEojFvBHmpGCtS8QyOwu2vTuIXFbODhtC6LaZ7XU096Ww9AbbDCTycEWCt4rG9VBV2aPr4PaeVN5ELaePFZKKmqPd+Zpq6D0JPfPE1WmKAs28Y7Y7u7fwFSlZeKNTwEV2ZgZ7dr4xKC3Zbsp6HD1Hv8S80QTa9KdCIjZNVdpomgmQcMpdsHIZzUVcuDMFckQ3iegFhIPqlUEzkCxJ1hG7CTLqH5U9XkfvKqfd31QUiFDXAnGU0T/L90V1AURWtjH4U07CBRD8gmj3a2Hu9g0f2irdEBZST6rqcmpOnKPsYJFp3OCrAtZEuwz8nVUDqNU9v4RprWGIQsf+meIHnwbA7oBFg9B/05m64oVsFaJ6U2pgSK2j5H0/l5PWONggMFtqRA0xc83J+btCiQcLAZBZo8B+e/1TGZwjF7+Mi9fbLcSn4EnbVBAv3QStHdD6IT91H0JfjfXAclKFZC/7wAAAAASUVORK5CYII=']

imgData.forEach(src=>{
  const img = new Image()
  img.src = src
  imgs.push(img)
})

for (let i=0; i<dust.length-1; i++) dust[i] = {img:imgs[gsap.utils.wrap(0,imgs.length,i)], x:0, y:0, opacity:0, scale:1, rot:0}

function drawDust(img, x, y, opacity, scale, rot){
  const w = img.width*scale
  const h = img.height*scale
  ctx.globalAlpha = opacity
  ctx.translate(x, y)
  ctx.rotate(rot)
  ctx.drawImage(img, -w/2, -h/2, w, h)
  ctx.beginPath()
  ctx.arc(0, 0, w, 0, 2*Math.PI, false)  
  ctx.globalCompositeOperation = 'overlay'//'darken'
  ctx.fillStyle = 'hsla('+(currentIndex/dust.length*360)+',100%,50%,0.36)'
  ctx.fill()  
  ctx.globalCompositeOperation = 'source-over'
  ctx.rotate(-rot)
  ctx.translate(-x, -y)  
}

function redraw(){
  ctx.globalAlpha = 1
  ctx.fillStyle = '#000'
  ctx.fillRect(0, 0, cw, ch)
  dust.forEach(d => drawDust(d.img, d.x, d.y, d.opacity, d.scale, d.rot))
}

window.onload = window.onresize = ()=>{
  cw = c.width = innerWidth
  ch = c.height = innerHeight
  autoTL.invalidate()
  redraw()
}

window.onpointermove = (e)=>{
  currentIndex = gsap.utils.wrap(0, dust.length-1, currentIndex+1)
  gsap.to(m, {
    duration:2,
    ease:'power4',
    x:e.x,
    y:e.y,
    onUpdate:tweenDust
  })
}

c.onpointerenter =()=> autoTL.pause()
c.onpointerleave =()=> autoTL.play()


const autoTL = gsap.timeline()
  .fromTo(m, {
    x:()=>cw/2,
    y:()=>ch*.25
  },{
    duration:2,
    ease:'power2.inOut',
    x:()=>cw/2,
    y:()=>ch*.75,
    yoyo:true,
    repeat:99,
    onUpdate:()=>{
      currentIndex = gsap.utils.wrap(0, dust.length-1, currentIndex+1)
      tweenDust()
    }
  })


function tweenDust(){
  const currentDust = dust[currentIndex]
  if ( gsap.isTweening(currentDust) ) return
  gsap.timeline()
    .set(currentDust, {x:m.x, y:m.y, rot:'random(0,90,1)'})
    .fromTo(currentDust, {scale:0}, {scale:'random(1,3.5)', ease:'power1', duration:0.7})
    .fromTo(currentDust, {opacity:0}, {opacity:0.3, ease:'power1.in', duration:0.3, yoyo:true, repeat:1}, 0.1)
    .timeScale(0.8)
}

gsap.ticker.add(redraw)