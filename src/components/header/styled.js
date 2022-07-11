import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 5px;
  margin: 5px;

  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-weight: 500;
  }

  input:focus {
    outline: none;
  }

  button {
    width: 20%;
    margin-right: 5px;
    border: 1px solid hsl(251, 33%, 67%);
    border-radius: 4px;
    background-color: hsl(259, 91%, 87%);
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    background-color: hsl(251, 33%, 67%);
  }
`
