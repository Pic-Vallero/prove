var request = new XMLHttpRequest()

request.open('GET', '#restLinkHere', true)
request.onload = fuction() {
  const people = JSON.parse(this.response)

  if(request.status >= 200 && request.status < 400){
    //???? pass the data into html with jsGrid
  }else{
    console.log('error')
  }
}
