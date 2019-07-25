/*
---
layout: mocks
title: Search
---

<section class="ta-c">
  <h1>What are you looking for? 🔍</h1>
  <form action="/mocks/search">
    <p>
      <input
        type="search"
        size="40"
        value="Music"
        placeholder="example: Music"
        autofocus
      />
    </p>
    <p>
      <button type="submit">🔍 Search</button>
    </p>
  </form>
</section>

<section>
  <h2>How about one of these? 💁🏽‍♂️</h2>
  <ul class="ls-n">
    <li class="my-c">
      <small class="preview__kind-label">Choice Card 🧐</small>
      <h3>
        <a href="/mocks/card"
          >Which of the following topics does electronic music not cover?</a
        >
      </h3>
    </li>
    <li class="my-c">
      <small>Choice Card 🧐</small>
      <h3><a href="/mocks/card">What is tape music?</a></h3>
    </li>
    <li class="my-c">
      <small>Page Card 📜</small>
      <h3><a href="/mocks/card">Electronic Music</a></h3>
    </li>
    <li class="my-c">
      <small>User 👩🏾‍🎤</small>
      <h3>
        <a href="/mocks/user"
          ><img
            class="avatar"
            src="https://www.gravatar.com/avatar/f78390a9c10f98fd58fd5b4c8e2287f9?d=mm&amp;s=24"
          />
          music</a
        >
      </h3>
    </li>
    <li class="my-c">
      <small>Subject 📚</small>
      <h3><a href="/mocks/subject">An Introduction to Electronic Music</a></h3>
    </li>
  </ul>
</section>

<section>
  <p><mark>🤷🏽‍♀️ Not seeing what you want? 🤷🏽‍♀️</mark></p>
  <!-- alternative: We couldn't find anything (if couldn't find anything) -->

  <details>
    <summary
      ><h2 class="d-ib">
        You can make a new subject 💡
      </h2></summary
    >

    <form action="/mocks/create-subject">
      <p>
        <label for="name">What should we call this new subject?</label>
        <input
          type="text"
          value="Music"
          placeholder="example: Introduction to Classical Guitar"
          size="40"
          id="name"
          name="name"
          autofocus
        />
      </p>

      <p>
        <label for="body">What are the goals of this subject?</label>
        <textarea
          placeholder="example: An introduction to classical guitar. Let's learn some chords. And how to read guitar tablature."
          cols="40"
          rows="4"
          id="body"
          name="body"
        ></textarea>
      </p>

      <!--
        If the user isn't logged in, ask them to (optionally) sign up to get notified
      -->
      <p>
        <em
          >Advice: We recommend
          <a href="/mocks/sign-up?return=/mocks/create-subject">joining</a></em
        >
        👩🏾‍💻<em>
          before you create content,<br />
          so you can easily continue later!</em
        >
      </p>

      <p>
        <button type="submit">📚 Create Subject</button>
      </p>
    </form>
  </details>
</section>

*/