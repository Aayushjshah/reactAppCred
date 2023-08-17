import React from 'react'
export default function Contact() {
return (
<div class="container mt-5">
    <h1>Delete Card</h1>
    <form>
      <div class="mb-3">
        <label for="idInput" class="form-label" >ID</label>
        <input type="text" class="form-control" id="idInput" placeholder="Enter ID"/>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
)
}