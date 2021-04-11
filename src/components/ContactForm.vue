<template>
    <div>
        <v-img
          src="../assets/machine learning.png"
          gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
        >
        <form class="contact-form" @submit.prevent="sendEmail">
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
                        <v-text-field name="from_name" label="Your Name*" solo light></v-text-field>
                        <v-text-field name="from_email" label="Your Email*" solo light></v-text-field>
                        <v-text-field name="from_phone" label="Your Phone" solo light></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6" class="fill-height">
                        <v-textarea
                        light
                        outlined
                        solo
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

            <!-- <label>Name</label>
            <input type="text" name="from_name">
            <label>Email</label>
            <input type="email" name="from_email">
            <label>Message</label>
            <textarea name="message"></textarea>
            <input type="submit" value="Send"> -->
        </form>
        </v-img>
    </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  methods: {
    sendEmail: (e) => {
      emailjs.sendForm('service_vztm2qa', 'template_6w4skyd', e.target, 'user_v6guEmIacckV6bNjPCz5c')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
            console.log(e);
        }, (error) => {
            console.log('FAILED...', error);
        });
    }
  }
}

</script>

<style scoped>

</style>