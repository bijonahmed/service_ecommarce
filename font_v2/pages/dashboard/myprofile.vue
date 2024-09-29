<template>
  <title>Profile</title>

  <body class="bgc-thm1">
    <div class="wrapper ovh">
      <Header />
      <MobileMenu />
      <div class="body_content">
        <section class="categories_list_section overflow-hidden">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="listings_category_nav_list_menu">
                  <ul class="mb0 d-flex ps-0">
                    <li v-for="data in categoryData" :key="data.id">
                      <nuxt-link :to="`/category/${data.slug}`">
                        {{ data.name }}
                      </nuxt-link>
                    </li>
                    <!-- {{categoryData}} -->
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Breadcumb Sections -->

        <div class="loading-indicator" v-if="loading" style="text-align: center;">
          <Loader />
        </div>
        <section class="breadcumb-section">
          <div class="container">
            <div class="row">
              <div class="col-sm-8 col-lg-10">
                <div class="breadcumb-style1 mb10-xs">
                  <div class="breadcumb-list">
                    <nuxt-link to="/dashboard">Dashboard</nuxt-link>
                    <a href="#">Profile</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 col-lg-2">
                <div class="d-flex align-items-center justify-content-sm-end">
                  <div class="share-save-widget d-flex align-items-center">
                    <span class="icon flaticon-share dark-color fz12 mr10"></span>
                    <div class="h6 mb-0"><nuxt-link to="/dashboard/welcome">Back</nuxt-link></div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
        
        <!-- Start Profile -->
       <div class="container">
        <div class="row">
            <div class="col-xl-12">
              <div class="ps-widget bgc-white bdrs4 overflow-hidden position-relative">
                <div class="col-xl-12">
                  <div class="profile-box d-sm-flex align-items-center mb30">
                    <div class="profile-img mb20-sm">
                      <img class="w-100 rounded-circle wa-xs" src="/images/team/fl-1.png" alt="">
                    </div>
                    <div class="profile-content ml20 ml0-xs">
                      <div class="d-flex align-items-center my-3">
                        <a href="#" class="tag-delt text-thm2"><span class="flaticon-delete text-thm2"></span></a>
                        <a href="#" class="upload-btn ml10">Upload Images</a>
                      </div>
                      <p class="text mb-0">Max file size is 1MB, Minimum dimension: 330x300 And Suitable files are .jpg &amp; .png</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <form class="form-style1">
                    <div class="row">
                      <div class="col-sm-6">
                        <div class="mb20">
                          <label class="heading-color ff-heading fw500 mb10">Username</label>
                          <input type="text" class="form-control" placeholder="i will">
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="mb20">
                          <label class="heading-color ff-heading fw500 mb10">Email Address</label>
                          <input type="email" class="form-control" placeholder="i will">
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="mb20">
                          <label class="heading-color ff-heading fw500 mb10">Phone Number</label>
                          <input type="text" class="form-control" placeholder="i will">
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="mb20">
                          <label class="heading-color ff-heading fw500 mb10">Tagline</label>
                          <input type="text" class="form-control" placeholder="i will">
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="mb20">
                          <div class="form-style1">
                            <label class="heading-color ff-heading fw500 mb10">Hourly Rate</label>
                            <div class="bootselect-multiselect">
                              <div class="dropdown bootstrap-select"><select class="selectpicker" tabindex="null">
                                <option>Select</option>
                                <option>$50</option>
                                <option>$60</option>
                                <option>$70</option>
                                <option>$80</option>
                                <option>$90</option>
                                <option>$100</option>
                              </select><button type="button" tabindex="-1" class="btn dropdown-toggle btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" title="Select"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Select</div></div> </div></button><div class="dropdown-menu" style="max-height: 913.183px; overflow: hidden; min-height: 126px;"><div class="inner show" role="listbox" id="bs-select-1" tabindex="-1" style="max-height: 895.183px; overflow-y: auto; min-height: 108px;" aria-activedescendant="bs-select-1-0"><ul class="dropdown-menu inner show" role="presentation" style="margin-top: 0px; margin-bottom: 0px;"><li class="selected active"><a role="option" class="dropdown-item active selected" id="bs-select-1-0" tabindex="0" aria-setsize="7" aria-posinset="1" aria-selected="true"><span class="text">Select</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-1-1" tabindex="0"><span class="text">$50</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-1-2" tabindex="0"><span class="text">$60</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-1-3" tabindex="0"><span class="text">$70</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-1-4" tabindex="0"><span class="text">$80</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-1-5" tabindex="0"><span class="text">$90</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-1-6" tabindex="0"><span class="text">$100</span></a></li></ul></div></div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="mb20">
                          <div class="form-style1">
                            <label class="heading-color ff-heading fw500 mb10">Gender</label>
                            <div class="bootselect-multiselect">
                              <div class="dropdown bootstrap-select"><select class="selectpicker" tabindex="null">
                                <option>Select</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                              </select><button type="button" tabindex="-1" class="btn dropdown-toggle btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-2" aria-haspopup="listbox" aria-expanded="false" title="Select"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Select</div></div> </div></button><div class="dropdown-menu" style="max-height: 913.183px; overflow: hidden; min-height: 126px;"><div class="inner show" role="listbox" id="bs-select-2" tabindex="-1" style="max-height: 895.183px; overflow-y: auto; min-height: 108px;" aria-activedescendant="bs-select-2-0"><ul class="dropdown-menu inner show" role="presentation" style="margin-top: 0px; margin-bottom: 0px;"><li class="selected active"><a role="option" class="dropdown-item active selected" id="bs-select-2-0" tabindex="0" aria-setsize="4" aria-posinset="1" aria-selected="true"><span class="text">Select</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-2-1" tabindex="0"><span class="text">Male</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-2-2" tabindex="0"><span class="text">Female</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-2-3" tabindex="0"><span class="text">Other</span></a></li></ul></div></div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="mb20">
                          <div class="form-style1">
                            <label class="heading-color ff-heading fw500 mb10">Specialization</label>
                            <div class="bootselect-multiselect">
                              <div class="dropdown bootstrap-select"><select class="selectpicker" tabindex="null">
                                <option>Select</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                              </select><button type="button" tabindex="-1" class="btn dropdown-toggle btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-3" aria-haspopup="listbox" aria-expanded="false" title="Select"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Select</div></div> </div></button><div class="dropdown-menu" style="max-height: 800.183px; overflow: hidden; min-height: 126px;"><div class="inner show" role="listbox" id="bs-select-3" tabindex="-1" style="max-height: 782.183px; overflow-y: auto; min-height: 108px;" aria-activedescendant="bs-select-3-0"><ul class="dropdown-menu inner show" role="presentation" style="margin-top: 0px; margin-bottom: 0px;"><li class="selected active"><a role="option" class="dropdown-item active selected" id="bs-select-3-0" tabindex="0" aria-setsize="4" aria-posinset="1" aria-selected="true"><span class="text">Select</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-1" tabindex="0"><span class="text">Male</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-2" tabindex="0"><span class="text">Female</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-3" tabindex="0"><span class="text">Other</span></a></li></ul></div></div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="mb20">
                          <div class="form-style1">
                            <label class="heading-color ff-heading fw500 mb10">Type</label>
                            <div class="bootselect-multiselect">
                              <div class="dropdown bootstrap-select"><select class="selectpicker">
                                <option>Select</option>
                                <option>Type One</option>
                                <option>Type Two</option>
                                <option>Type Three</option>
                              </select><button type="button" tabindex="-1" class="btn dropdown-toggle btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-4" aria-haspopup="listbox" aria-expanded="false" title="Select"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Select</div></div> </div></button><div class="dropdown-menu "><div class="inner show" role="listbox" id="bs-select-4" tabindex="-1"><ul class="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="mb20">
                          <div class="form-style1">
                            <label class="heading-color ff-heading fw500 mb10">Country</label>
                            <div class="bootselect-multiselect">
                              <div class="dropdown bootstrap-select"><select class="selectpicker">
                                <option>Turkey</option>
                                <option>United Kingdom</option>
                                <option>United State</option>
                                <option>Ukraine</option>
                                <option>Uruguay</option>
                                <option>UK</option>
                                <option>Uzbekistan</option>
                              </select><button type="button" tabindex="-1" class="btn dropdown-toggle btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-5" aria-haspopup="listbox" aria-expanded="false" title="Turkey"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Turkey</div></div> </div></button><div class="dropdown-menu "><div class="inner show" role="listbox" id="bs-select-5" tabindex="-1"><ul class="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="mb20">
                          <div class="form-style1">
                            <label class="heading-color ff-heading fw500 mb10">City</label>
                            <div class="bootselect-multiselect">
                              <div class="dropdown bootstrap-select"><select class="selectpicker">
                                <option data-tokens="California">California</option>
                                <option data-tokens="Chicago">Chicago</option>
                                <option data-tokens="LosAngeles">Los Angeles</option>
                                <option data-tokens="Manhattan">Manhattan</option>
                                <option data-tokens="NewJersey">New Jersey</option>
                                <option data-tokens="NewYork">New York</option>
                                <option data-tokens="SanDiego">San Diego</option>
                                <option data-tokens="SanFrancisco">San Francisco</option>
                                <option data-tokens="Texas">Texas</option>
                              </select><button type="button" tabindex="-1" class="btn dropdown-toggle btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-6" aria-haspopup="listbox" aria-expanded="false" title="California"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">California</div></div> </div></button><div class="dropdown-menu "><div class="inner show" role="listbox" id="bs-select-6" tabindex="-1"><ul class="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="mb20">
                          <div class="form-style1">
                            <label class="heading-color ff-heading fw500 mb10">Languages</label>
                            <div class="bootselect-multiselect">
                              <div class="dropdown bootstrap-select show-tick"><select class="selectpicker" multiple="" tabindex="null">
                                <option>English</option>
                                <option>Spanish</option>
                                <option>Greek</option>
                                <option>Tarkish</option>
                              </select><button type="button" tabindex="-1" class="btn dropdown-toggle btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-7" aria-haspopup="listbox" aria-expanded="false" title="English, Spanish, Greek"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">English, Spanish, Greek</div></div> </div></button><div class="dropdown-menu" style="max-height: 574.183px; overflow: hidden; min-height: 126px;"><div class="inner show" role="listbox" id="bs-select-7" tabindex="-1" aria-multiselectable="true" style="max-height: 556.183px; overflow-y: auto; min-height: 108px;"><ul class="dropdown-menu inner show" role="presentation" style="margin-top: 0px; margin-bottom: 0px;"><li class="selected"><a role="option" class="dropdown-item selected" id="bs-select-7-0" tabindex="0" aria-selected="true" aria-setsize="4" aria-posinset="1"><span class=" bs-ok-default check-mark"></span><span class="text">English</span></a></li><li class="selected"><a role="option" class="dropdown-item selected" id="bs-select-7-1" tabindex="0" aria-selected="true" aria-setsize="4" aria-posinset="2"><span class=" bs-ok-default check-mark"></span><span class="text">Spanish</span></a></li><li class="selected"><a role="option" class="dropdown-item selected" id="bs-select-7-2" tabindex="0" aria-selected="true" aria-setsize="4" aria-posinset="3"><span class=" bs-ok-default check-mark"></span><span class="text">Greek</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-7-3" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">Tarkish</span></a></li></ul></div></div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="mb20">
                          <div class="form-style1">
                            <label class="heading-color ff-heading fw500 mb10">Languages Level</label>
                            <div class="bootselect-multiselect">
                              <div class="dropdown bootstrap-select"><select class="selectpicker" tabindex="null">
                                <option>Select</option>
                                <option>Fluent</option>
                                <option>Mid Level</option>
                                <option>Conversational</option>
                                <option>Other</option>
                              </select><button type="button" tabindex="-1" class="btn dropdown-toggle btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-8" aria-haspopup="listbox" aria-expanded="false" title="Fluent"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Fluent</div></div> </div></button><div class="dropdown-menu" style="max-height: 574.183px; overflow: hidden; min-height: 126px;"><div class="inner show" role="listbox" id="bs-select-8" tabindex="-1" style="max-height: 556.183px; overflow-y: auto; min-height: 108px;" aria-activedescendant="bs-select-8-1"><ul class="dropdown-menu inner show" role="presentation" style="margin-top: 0px; margin-bottom: 0px;"><li class=""><a role="option" class="dropdown-item" id="bs-select-8-0" tabindex="0" aria-setsize="5" aria-posinset="1"><span class=" bs-ok-default check-mark"></span><span class="text">Select</span></a></li><li class="selected active"><a role="option" class="dropdown-item active selected" id="bs-select-8-1" tabindex="0" aria-setsize="5" aria-posinset="2" aria-selected="true"><span class=" bs-ok-default check-mark"></span><span class="text">Fluent</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-8-2" tabindex="0"><span class=" bs-ok-default check-mark"></span><span class="text">Mid Level</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-8-3" tabindex="0"><span class=" bs-ok-default check-mark"></span><span class="text">Conversational</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-8-4" tabindex="0"><span class=" bs-ok-default check-mark"></span><span class="text">Other</span></a></li></ul></div></div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="mb10">
                          <label class="heading-color ff-heading fw500 mb10">Introduce Yourself</label>
                          <textarea cols="30" rows="6" placeholder="Description"></textarea>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="text-start">
                          <a class="ud-btn btn-thm" href="page-contact.html">Save<i class="fal fa-arrow-right-long"></i></a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <br/>
              <div class="ps-widget bgc-white bdrs4 p1 mb30 overflow-hidden position-relative">
                <div class="bdrb1 pb15 mb25">
                  <h5 class="list-title">Skills</h5>
                </div>
                <div class="col-lg-7">
                  <div class="row">
                    <form class="form-style1">
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="mb20">
                            <div class="form-style1">
                              <label class="heading-color ff-heading fw500 mb10">Skills 1</label>
                              <div class="bootselect-multiselect">
                                <div class="dropdown bootstrap-select"><select class="selectpicker">
                                  <option>Designer</option>
                                  <option>UI/UX</option>
                                </select><button type="button" tabindex="-1" class="btn dropdown-toggle btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-9" aria-haspopup="listbox" aria-expanded="false" title="Designer"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Designer</div></div> </div></button><div class="dropdown-menu "><div class="inner show" role="listbox" id="bs-select-9" tabindex="-1"><ul class="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="mb20">
                            <div class="form-style1">
                              <label class="heading-color ff-heading fw500 mb10">Point</label>
                              <div class="bootselect-multiselect">
                                <div class="dropdown bootstrap-select"><select class="selectpicker">
                                  <option>90</option>
                                  <option>80</option>
                                </select><button type="button" tabindex="-1" class="btn dropdown-toggle btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-10" aria-haspopup="listbox" aria-expanded="false" title="90"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">90</div></div> </div></button><div class="dropdown-menu "><div class="inner show" role="listbox" id="bs-select-10" tabindex="-1"><ul class="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="mb20">
                            <div class="form-style1">
                              <label class="heading-color ff-heading fw500 mb10">Skills 2</label>
                              <div class="bootselect-multiselect">
                                <div class="dropdown bootstrap-select"><select class="selectpicker">
                                  <option>Developer</option>
                                  <option>Programmer</option>
                                </select><button type="button" tabindex="-1" class="btn dropdown-toggle btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-11" aria-haspopup="listbox" aria-expanded="false" title="Developer"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Developer</div></div> </div></button><div class="dropdown-menu "><div class="inner show" role="listbox" id="bs-select-11" tabindex="-1"><ul class="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="mb20">
                            <div class="form-style1">
                            <label class="heading-color ff-heading fw500 mb10">Point</label>
                              <div class="bootselect-multiselect">
                                <div class="dropdown bootstrap-select"><select class="selectpicker">
                                  <option>60</option>
                                  <option>70</option>
                                </select><button type="button" tabindex="-1" class="btn dropdown-toggle btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-12" aria-haspopup="listbox" aria-expanded="false" title="60"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">60</div></div> </div></button><div class="dropdown-menu "><div class="inner show" role="listbox" id="bs-select-12" tabindex="-1"><ul class="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="mb20">
                            <div class="form-style1">
                              <label class="heading-color ff-heading fw500 mb10">Skills 3</label>
                              <div class="bootselect-multiselect">
                                <div class="dropdown bootstrap-select"><select class="selectpicker">
                                  <option>Video Editor</option>
                                  <option>Audio &amp; Music</option>
                                </select><button type="button" tabindex="-1" class="btn dropdown-toggle btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-13" aria-haspopup="listbox" aria-expanded="false" title="Video Editor"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Video Editor</div></div> </div></button><div class="dropdown-menu "><div class="inner show" role="listbox" id="bs-select-13" tabindex="-1"><ul class="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="mb20">
                            <div class="form-style1">
                              <label class="heading-color ff-heading fw500 mb10">Point</label>
                              <div class="bootselect-multiselect">
                                <div class="dropdown bootstrap-select"><select class="selectpicker">
                                  <option>75</option>
                                  <option>80</option>
                                </select><button type="button" tabindex="-1" class="btn dropdown-toggle btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-14" aria-haspopup="listbox" aria-expanded="false" title="75"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">75</div></div> </div></button><div class="dropdown-menu "><div class="inner show" role="listbox" id="bs-select-14" tabindex="-1"><ul class="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="text-start">
                            <a class="ud-btn btn-thm" href="page-contact.html">Save<i class="fal fa-arrow-right-long"></i></a>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="ps-widget bgc-white bdrs4 p1 mb30 overflow-hidden position-relative">
                <div class="bdrb1 pb15 mb30 d-sm-flex justify-content-between">
                  <h5 class="list-title">Education</h5>
                  <a href="#" class="add-more-btn text-thm"><i class="icon far fa-plus mr10"></i>Add Aducation</a>
                </div>
                <div class="position-relative">
                  <div class="educational-quality">
                    <div class="m-circle text-thm">M</div>
                    <div class="wrapper mb40 position-relative">
                      <div class="del-edit">
                        <div class="d-flex">
                          <a href="#" class="icon me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Edit" aria-label="Edit"><span class="flaticon-pencil"></span></a>
                          <a href="#" class="icon" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Delete" aria-label="Delete"><span class="flaticon-delete"></span></a>
                        </div>
                      </div>
                      <span class="tag">2012 - 2014</span>
                      <h5 class="mt15">Bachlors in Fine Arts</h5>
                      <h6 class="text-thm">Modern College</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum <br class="d-none d-lg-block"> primis in faucibus.</p>
                    </div>
                    <div class="m-circle before-none text-thm">M</div>
                    <div class="wrapper mb30 position-relative">
                      <div class="del-edit">
                        <div class="d-flex">
                          <a href="#" class="icon me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Edit" aria-label="Edit"><span class="flaticon-pencil"></span></a>
                          <a href="#" class="icon" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Delete" aria-label="Delete"><span class="flaticon-delete"></span></a>
                        </div>
                      </div>
                      <span class="tag">2008 - 2012</span>
                      <h5 class="mt15">Computer Science</h5>
                      <h6 class="text-thm">Harvartd University</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum <br class="d-none d-lg-block"> primis in faucibus.</p>
                    </div>
                  </div>
                  <div class="text-start">
                    <a class="ud-btn btn-thm" href="#">Save<i class="fal fa-arrow-right-long"></i></a>
                  </div>
                </div>
              </div>
              <div class="ps-widget bgc-white bdrs4 p1 mb30 overflow-hidden position-relative">
                <div class="bdrb1 pb15 mb30 d-sm-flex justify-content-between">
                  <h5 class="list-title">Work &amp; Experience</h5>
                  <a href="#" class="add-more-btn text-thm"><i class="icon far fa-plus mr10"></i>Add Experience</a>
                </div>
                <div class="position-relative">
                  <div class="educational-quality">
                    <div class="m-circle text-thm">M</div>
                    <div class="wrapper mb40 position-relative">
                      <div class="del-edit">
                        <div class="d-flex">
                          <a href="#" class="icon me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Edit" aria-label="Edit"><span class="flaticon-pencil"></span></a>
                          <a href="#" class="icon" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Delete" aria-label="Delete"><span class="flaticon-delete"></span></a>
                        </div>
                      </div>
                      <span class="tag">2012 - 2014</span>
                      <h5 class="mt15">UX Designer</h5>
                      <h6 class="text-thm">Dropbox</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum <br class="d-none d-lg-block"> primis in faucibus.</p>
                    </div>
                    <div class="m-circle before-none text-thm">M</div>
                    <div class="wrapper mb30 position-relative">
                      <div class="del-edit">
                        <div class="d-flex">
                          <a href="#" class="icon me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Edit" aria-label="Edit"><span class="flaticon-pencil"></span></a>
                          <a href="#" class="icon" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Delete" aria-label="Delete"><span class="flaticon-delete"></span></a>
                        </div>
                      </div>
                      <span class="tag">2008 - 2012</span>
                      <h5 class="mt15">Art Director</h5>
                      <h6 class="text-thm">amazon</h6>
                      <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum <br class="d-none d-lg-block"> primis in faucibus.</p>
                    </div>
                  </div>
                  <div class="text-start">
                    <a class="ud-btn btn-thm" href="#">Save<i class="fal fa-arrow-right-long"></i></a>
                  </div>
                </div>
              </div>
              <div class="ps-widget bgc-white bdrs4 p1 mb30 overflow-hidden position-relative">
                <div class="bdrb1 pb15 mb30 d-sm-flex justify-content-between">
                  <h5 class="list-title">Certification</h5>
                  <a href="#" class="add-more-btn text-thm"><i class="icon far fa-plus mr10"></i>Add Certification</a>
                </div>
                <div class="position-relative">
                  <div class="educational-quality ps-0">
                    <div class="wrapper mb40 position-relative">
                      <div class="del-edit">
                        <div class="d-flex">
                          <a href="#" class="icon me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Edit" aria-label="Edit"><span class="flaticon-pencil"></span></a>
                          <a href="#" class="icon" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Delete" aria-label="Delete"><span class="flaticon-delete"></span></a>
                        </div>
                      </div>
                      <span class="tag">2012 - 2014</span>
                      <h5 class="mt15">UI UX Design</h5>
                      <h6 class="text-thm">Udemy</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum <br class="d-none d-lg-block"> primis in faucibus.</p>
                    </div>
                    <div class="wrapper mb40 position-relative">
                      <div class="del-edit">
                        <div class="d-flex">
                          <a href="#" class="icon me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Edit" aria-label="Edit"><span class="flaticon-pencil"></span></a>
                          <a href="#" class="icon" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Delete" aria-label="Delete"><span class="flaticon-delete"></span></a>
                        </div>
                      </div>
                      <span class="tag">2008 - 2012</span>
                      <h5 class="mt15">App Design</h5>
                      <h6 class="text-thm">Google</h6>
                      <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum <br class="d-none d-lg-block"> primis in faucibus.</p>
                    </div>
                  </div>
                  <div class="text-start">
                    <a class="ud-btn btn-thm" href="#">Save<i class="fal fa-arrow-right-long"></i></a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
       </div>
        <!-- END Profile -->
        <div />
      </div>
    </div>

    <!-- Modal Template -->




    <Footer />
  </body>
</template>

<script setup>
import { useRoute } from 'vue-router';
import axios from 'axios';

import { useRouter } from 'vue-router';
import Swal from "sweetalert2";

const router = useRouter();
const categoryData = ref([]);
const loading = ref(false);
const route = useRoute();

definePageMeta({
  middleware: "is-logged-out",
});

const profileModal = ref(null);

const errors = ref({});
const profilePicture = ref(null);
const imagePreview = ref(null);
const name = ref('');
const email = ref('');
const selectedProfession = ref('');
const phone = ref('');
const skillInput = ref('');
const country_1 = ref('');
const skills = ref([]);
const professinListData = ref([]);
const skillsError = ref('');
let countryData = ref('');

const myprofile = () => {
  console.log("working....");
  router.push('/dashboard/myprofile')
}

const getCatList = async () => {
  try {
    loading.value = true;
    const response = await axios.get(`/unauthenticate/getFindCategorys`);
    categoryData.value = response.data;
  } catch (error) {
    // Handle error
  } finally {
    loading.value = false;
  }
};



onMounted(() => {
  getCatList();

});

</script>

<style scoped>
.body_content {
  padding: 100px;
}

@media (max-width: 991.98px) {
  .body_content {
    padding: 20px 20px 150px;
  }
}

@media (max-width: 575.98px) {
  .body_content {
    padding: 20px 10px;
  }
}

.categories_list_section {
  border-bottom: 1px solid #E9E9E9;
  padding: 7px 0 3px;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>