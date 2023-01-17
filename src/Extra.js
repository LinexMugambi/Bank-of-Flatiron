function validateForm(formData){
    const formDetails = {
      containsEmptyInput:false,
      isInvalid:false
    }

    //form should not contain empty field
    for(const inputData in formData){
      if(!formData[inputData]){
        formDetails.containsEmptyInput = true
        break
      }
    }