function shout(string) {
  return string.toUpperCase();
  
},

function whisper(string) {
  return string.toLowerCase();
},

function logShout(string) {
  console.log(string.toLowerCase);
},

function logWhisper(string) {
  console.log(string.toLowerCase)
}

('logWhisper(string)', function() {
  it('calls console.log() its one argument in all lowercase', function() {