import React from 'react'
export default function Contact() {
return (
<div class="container mt-5">
    <h1>Cancel Page</h1>
    <form>
      <div class="mb-3">
        <label for="idInput" class="form-label">Enter ID</label>
        <input type="text" class="form-control" id="idInput" placeholder="Enter the ID"/>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
)
}