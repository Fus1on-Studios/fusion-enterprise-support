async function verifyUser(member, roleId) {
  await member.roles.add(roleId);
}

module.exports = { verifyUser };
