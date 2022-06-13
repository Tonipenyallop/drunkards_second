import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    // Inserts seed entries
    await knex("users").insert([
        {username: "Toni", password: "tonisuperamazing" },
        { username:"Dragon", password: "123d" },
        { username:"Jojo", password: "jojojojo" }
    ]);
};