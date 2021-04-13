<template>
    <div>
        <v-img
          src="../assets/machine learning.png"
          gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
        >
        <!-- <v-form ref="form" class="contact-form" @submit.prevent="sendEmail">
            <v-container class="fill-height">
                <v-row justify="center" align="center" class="mt-5">
                    <v-col cols="12">
                        <div class="pt-12 text-center">
                        <h3 class="display-1 font-weight-blod">
                            CONTACT ME
                        </h3>
                        <p class="body-2 my-3">
                            <span class="welcome">
                            I thought this was a cool feature and I didn't want to remove it.
                            </span>
                        </p>
                        </div>
                    </v-col>

                    <v-col cols="12" md="6">
                        <v-text-field name="from_name" label="Your Name*" solo light required></v-text-field>
                        <v-text-field name="from_email" label="Your Email*" solo light required></v-text-field>
                        <v-text-field name="from_phone" label="Your Phone" solo light></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6" class="fill-height">
                        <v-textarea
                        light
                        outlined
                        solo
                        required
                        name="message"
                        label="Your Message*"
                        ></v-textarea>
                    </v-col>

                    <v-col cols="12" class="text-center">
                        <v-btn x-large color="accent">
                        <input type="submit" value="Send Message">
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>

        </v-form> -->
        
        
        <FormulateForm
            v-model="formValues" 
            @submit="sendEmail" 
            name="contactForm">
            <FormulateInput
                type="text"
                v-model="formValues.name"
                placeholder="Your Name*"
                validation="required"
            />
            <FormulateInput
                type="email"
                v-model="formValues.email"
                placeholder="Your Email*"
                validation="required|email"
            />
            <FormulateInput
                type="tel"
                v-model="formValues.phone"
                placeholder="Your Phone"
            />
            <FormulateInput
                type="textarea"
                v-model="formValues.message"
                placeholder="Your Message*"
                validation="required|min:5,length"
            />
            <FormulateInput
                type="submit"
                name="Submit"
            />
        </FormulateForm>
        </v-img>
    </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  data() {
      return {
          formValues: {
              name: "",
              email: "",
              phone: "",
              message: ""
          }
      }
  },
  methods: {
    sendEmail: (e) => {
    //   console.log(e)
      let formObj = {
          from_name: e.name, 
          from_email: e.email, 
          message: e.message, 
          from_phone: e.phone ? e.phone : "Not provided"
      }
      emailjs.send('service_vztm2qa', 'template_6w4skyd', formObj, 'user_v6guEmIacckV6bNjPCz5c')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
            alert("Email was successfully sent");
        }, (error) => {
            alert("Email FAILED...", error);
        });
    }
  }
}

</script>

<style scoped>

</style>