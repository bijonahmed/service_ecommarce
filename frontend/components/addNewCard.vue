<template id="add-new-card-template">
    <div class="addNewCard w-100">
        <form action="">
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="form-group mb-2">
                        <label for="">Card holder name</label>
                        <input type="text" placeholder="Jhon Due"
                            autocomplete="off" class="form-control">
                    </div>
                </div>
                <div class="col-7">
                    <div class="form-group mb-2">
                        <label for="">Card Number</label>
                        <input type="text" placeholder="**** **** ****"
                            autocomplete="off" class="form-control">
                    </div>
                </div>
                <div class="col-3">
                    <div class="form-group mb-2">
                        <label for="">Expire</label>
                        <input type="text" placeholder="MM/YY"
                            autocomplete="off" class="form-control">
                    </div>
                </div>
                <div class="col-2">
                    <div class="form-group mb-2">
                        <label for="">CVV</label>
                        <input type="text" placeholder="CVV"
                            autocomplete="off" class="form-control">
                    </div>
                </div>
                <button type="submit">Add</button>
            </div>
        </form>
    </div>
  </template>