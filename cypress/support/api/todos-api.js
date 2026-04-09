import { ENDPOINTS } from "../constants"

export const getTodo = (id, options = {}) => {
  return cy.request({
    method: 'GET',
    url: `${ENDPOINTS.TODOS}/${id}`,
    ...options
  })
}

export const updateTodo = (id, body, options = {}) => {
  return cy.request({
    method: 'PUT',
    url: `${ENDPOINTS.TODOS}/${id}`,
    body,
    ...options
  })
}