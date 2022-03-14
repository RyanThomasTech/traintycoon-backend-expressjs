import supertest from 'supertest';
import chai from 'chai';
import app from '../app.js';

export const { expect } = chai;
export const server = supertest.agent(app);