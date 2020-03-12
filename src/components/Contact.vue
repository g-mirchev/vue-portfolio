<template>
    <div class="container" style="padding:10%">
        <h2>Contact Me</h2>
        <form action="mailto:georgiemirchev@yahoo.com" method="POST" enctype="text/plain">
            <div class="form-group">
                <input type="email" class="form-control"
                    v-model="contact.email" placeholder="Enter email">
            </div>
            <div class="form-group">
                <textarea class="form-control"
                    v-model="contact.message" rows="3" placeholder="Sending email's isn't possible yet">
                </textarea>
            </div>
        </form>

        <button type="button" @click="submit" class="btn btn-primary btn-lg">
            Contact
        </button>
    </div>
</template>
<script lang="ts">
export default{
    data(){
        return {
            contact:{
                email:'',
                message:''
            }
        }
    },

    methods:{
        submit(){
            //validating the form
            if(this.contact.email !="" && this.contact.message !=""){
                //send details to email
            }else{
                alert("All fields are required");
            }
        }
    }
}
</script>