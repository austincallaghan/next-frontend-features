<script lang="ts">
  import Button from '../Button/Button.svelte';
  import ButtonGroup from '../ButtonGroup/ButtonGroup.svelte';
  import Input from '../Input/Input.svelte';

  let firstName = '';
  let lastName = '';
  let email = '';
  let password = '';

  function handleCancel() {
    console.log('Form canceled');
    firstName = '';
    lastName = '';
    email = '';
    password = '';
  }

  function handleSubmit(event: Event) {
    event.preventDefault();
    console.log('Form submitted', {
      firstName,
      lastName,
      email,
      password,
    });
  }
</script>

<form on:submit|preventDefault={handleSubmit} class="form-container">
  <h2 class="form-title">Mock Registration Form</h2>

  <Input label="First Name" placeholder="Enter your first name" value={firstName} />

  <Input label="Last Name" placeholder="Enter your last name" value={lastName} />

  <Input label="Email" placeholder="Enter your email" type="email" value={email} />

  <Input label="Password" placeholder="Enter your password" type="password" value={password} />

  <ButtonGroup>
    <Button on:click={handleCancel} variant="secondary">Cancel</Button>
    <Button variant="primary">Submit</Button>
  </ButtonGroup>
</form>

<style>
  .form-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }

  .form-title {
    margin-bottom: 12px;
    font-size: 1.5rem;
    color: #333;
    text-align: center;
  }

  :global(.button-group) {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  }
</style>
