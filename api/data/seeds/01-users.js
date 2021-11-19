exports.seed = function(knex) {
    return knex('users').insert([
      {username: 'Billy', password: '$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq', phone_number: '1234567890'},
      {username: 'Matt', password: '$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq', phone_number: '2345678901'},
      {username: 'Shane', password: '$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq', phone_number: '3456789012'}
    ]);
  };