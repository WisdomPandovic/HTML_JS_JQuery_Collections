let output1 = document.getElementById('output')

// Handle click event for #output element
$('#output').click(function(){
    // Your code here
  });
  
  // Handle click event for #output2 element and fade out #output element
  $('#output2').click(function(){
    $('#output').fadeOut();
  });
  
  // Handle change event for #num input element
  $('#num').change(function(){
    let num = parseInt($(this).val()); // Convert value to integer
    // Toggle classes based on the value of num
    if(num > 7){
      $(this).addClass('success').removeClass('error');
    } else {
      $(this).addClass('error').removeClass('success');
    }
  });
  
  // Function to populate table row with data
  function populateRow(name, price, qty){
    return `
      <tr>
          <td>${name}</td>
          <td>${price}</td>
          <td>${qty}</td>
          <td>
            <input type="button" value="Edit" class="edit"/>
            <input type="button" value="Delete" class="delete"/>
          </td>
      </tr>
    `;
  }
  
  // Handle click event for #btnsave button
  $('#btnsave').click(function(){
    // Get values from input fields
    let name = $('#name').val();
    let price = $('#price').val();
    let qty = $('#qty').val();
    
    // Populate table row with data and append to #product table body
    $('#product').append(populateRow(name, price, qty));
    
    // Clear input fields
    $('#name, #price, #qty').val('');
  });
  
  // Handle click event for dynamically created .edit buttons using event delegation
  $(document).on('click', '.edit', function(){
    alert('Edit button clicked');
  });
  
