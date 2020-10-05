<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-10">
        <h1>Appointments</h1>
        <hr />
        <br /><br />
        <alert :message="message" v-if="showMessage"></alert>
        <button
          type="button"
          class="btn btn-primary btn-sm"
          v-b-modal.appointment-modal
        >
          Add Appointments
        </button>
        <br /><br />
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">name</th>
              <th scope="col">time</th>
              <th scope="col">Email</th>
              <th scope="col">Doctor</th>
              <th scope="col">Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(Appointment, index) in appointments" :key="index">
              <td>{{ Appointment.name }}</td>
              <td>{{ Appointment.time }}</td>
              <td>{{ Appointment.email }}</td>
              <td>{{ Appointment.doctor }}</td>
              <td>{{ Appointment.date }}</td>
              <td></td>
              <td>
                <div class="btn-group" role="group">
                  <button
                    type="button"
                    class="btn btn-warning btn-sm"
                    v-b-modal.appointment-update-modal
                    @click="editAppointment(appointment)"
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger btn-sm"
                    @click="onDeleteAppointment(appointment)"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <b-modal
      ref="addAppointmentModal"
      id="appointment-modal"
      title="Add a new appointment"
      hide-footer
    >
      <b-form @submit="onSubmit" @reset="onReset" class="w-100">
        <b-form-group
          id="form-title-group"
          label="Title:"
          label-for="form-title-input"
        >
          <b-form-input
            id="form-title-input"
            type="text"
            v-model="addAppointmentForm.name"
            required
            placeholder="Enter name"
          >
          </b-form-input>
        </b-form-group>
        <b-form-group
          id="form-title-group"
          label="Title:"
          label-for="form-title-input"
        >
          <b-form-input
            id="form-title-input"
            type="text"
            v-model="addAppointmentForm.time"
            required
            placeholder="Enter time"
          >
          </b-form-input>
        </b-form-group>
        <b-form-group
          id="form-title-group"
          label="Title:"
          label-for="form-title-input"
        >
          <b-form-input
            id="form-title-input"
            type="text"
            v-model="addAppointmentForm.email"
            required
            placeholder="Enter email"
          >
          </b-form-input>
        </b-form-group>
        <b-form-group
          id="form-author-group"
          label="Doctor:"
          label-for="form-author-input"
        >
          <b-form-input
            id="form-author-input"
            type="text"
            v-model="addAppointmentForm.doctor"
            required
            placeholder="Enter doctor"
          >
          </b-form-input>
        </b-form-group>
        <b-form-group
          id="form-author-group"
          label="Date:"
          label-for="form-author-input"
        >
          <b-form-input
            id="form-author-input"
            type="text"
            v-model="addAppointmentForm.date"
            required
            placeholder="Enter date"
          >
          </b-form-input>
        </b-form-group>

        <b-button-group>
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-button-group>
      </b-form>
    </b-modal>
    <b-modal
      ref="editAppointmentModal"
      id="appointment-update-modal"
      title="Update"
      hide-footer
    >
      <b-form @submit="onSubmitUpdate" @reset="onResetUpdate" class="w-100">
        <b-form-group
          id="form-title-edit-group"
          label="Title:"
          label-for="form-title-edit-input"
        >
          <b-form-input
            id="form-title-edit-input"
            type="text"
            v-model="editForm.name"
            required
            placeholder="Enter name"
          >
          </b-form-input>
        </b-form-group>
        <b-form-group
          id="form-title-edit-group"
          label="Title:"
          label-for="form-title-edit-input"
        >
          <b-form-input
            id="form-title-edit-input"
            type="text"
            v-model="editForm.time"
            required
            placeholder="Enter time"
          >
          </b-form-input>
        </b-form-group>
        <b-form-group
          id="form-title-edit-group"
          label="Title:"
          label-for="form-title-edit-input"
        >
          <b-form-input
            id="form-title-edit-input"
            type="text"
            v-model="editForm.email"
            required
            placeholder="Enter title"
          >
          </b-form-input>
        </b-form-group>
        <b-form-group
          id="form-author-edit-group"
          label="Author:"
          label-for="form-author-edit-input"
        >
          <b-form-input
            id="form-author-edit-input"
            type="text"
            v-model="editForm.doctor"
            required
            placeholder="Enter author"
          >
          </b-form-input>
        </b-form-group>

        <b-button-group>
          <b-button type="submit" variant="primary">Update</b-button>
          <b-button type="reset" variant="danger">Cancel</b-button>
        </b-button-group>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
import Alert from "./Alert.vue";
export default {
  data() {
    return {
      appointments: [],
      addAppointmentForm: {
        name: "",
        time: "",
        email: "",
        doctor: "",
        date: ""
      },
      message: "",
      showMessage: false,
      editForm: {
        id: "",
        name: "",
        time: "",
        email: "",
        doctor: "",
        date: ""
      }
    };
  },
  components: {
    alert: Alert
  },
  methods: {
    getAppointments() {
      const path = "https://hfpserver.herokuapp.com/appointments";
      axios
        .get(path)
        .then(res => {
          this.appointments = res.data.appointments;
        })
        .catch(error => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
    addAppointment(payload) {
      const path = "https://hfpserver.herokuapp.com/appointments";
      axios
        .post(path, payload)
        .then(() => {
          this.getAppointments();
          this.message = "Appointment Added!";
          this.showMessage = true;
        })
        .catch(error => {
          // eslint-disable-next-line
          console.log(error);
          this.getAppointments();
        });
    },
    initForm() {
      this.addAppointmentForm.name = "";
      this.addAppointmentForm.time = "";
      this.addAppointmentForm.email = "";
      this.addAppointmentForm.doctor = "";
      this.addAppointmentForm.date = "";
      this.editForm.id = "";
      this.editForm.name = "";
      this.editForm.time = "";
      this.editForm.email = "";
      this.editForm.doctor = "";
      this.editForm.date = "";
    },
    onSubmit(evt) {
      evt.preventDefault();
      this.$refs.addAppointmentModal.hide();
      const payload = {
        name: this.addAppointmentForm.name,
        time: this.addAppointmentForm.time,
        email: this.addAppointmentForm.email,
        doctor: this.addAppointmentForm.doctor,
        date: this.addAppointmentForm.date
      };
      this.addAppointment(payload);
      this.initForm();
    },
    onReset(evt) {
      evt.preventDefault();
      this.$refs.addAppointmentModal.hide();
      this.initForm();
    },
    editAppointment(appointment) {
      this.editForm = appointment;
    },
    onSubmitUpdate(evt) {
      evt.preventDefault();
      this.$refs.editAppointmentModal.hide();
      const payload = {
        name: this.editForm.name,
        time: this.editForm.time,
        email: this.editForm.email,
        doctor: this.editForm.doctor,
        date: this.editForm.doctor
      };
      this.updateAppointment(payload, this.editForm.id);
    },
    updateAppointment(payload, appointmentID) {
      const path = `https://hfpserver.herokuapp.com/appointments/${appointmentID}`;
      axios
        .put(path, payload)
        .then(() => {
          this.getAppointments();
          this.message = "Appointment updated!";
          this.showMessage = true;
        })
        .catch(error => {
          // eslint-disable-next-line
          console.error(error);
          this.getAppointments();
        });
    },
    onResetUpdate(evt) {
      evt.preventDefault();
      this.$refs.editAppointmentModal.hide();
      this.initForm();
      this.getAppointments(); // why?
    },
    removeAppointment(appointmentID) {
      const path = `https://hfpserver.herokuapp.com/appointments${appointmentID}`;
      axios
        .delete(path)
        .then(() => {
          this.getAppointments();
          this.message = "Appointment removed!";
          this.showMessage = true;
        })
        .catch(error => {
          // eslint-disable-next-line
          console.error(error);
          this.getAppointments();
        });
    },
    onDeleteAppointment(appointment) {
      this.removeAppointment(appointment.id);
    }
  },
  created() {
    this.getAppointments();
  }
};
</script>
