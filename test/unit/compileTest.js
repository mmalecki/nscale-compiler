/*
 * THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY EXPRESSED OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 * OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
 * STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING
 * IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

'use strict';

var _ = require('lodash');

var assert = require('assert');
var compiler = require('../../main')();


describe('compiler test', function() {

  it('should correctly compile a system definition for local', function(done){
    var expected = require('./expectedLocal.json');
    compiler.compile(__dirname + '/../fixture/system2', 'local', function(err, system) {
      assert(!err);
      assert(system);
      assert(_.isEqual(system, expected));
      done();
    });
  });


  it('should correctly compile a system definition for aws', function(done){
    var expected = require('./expectedAws.json');
    compiler.compile(__dirname + '/../fixture/system2', 'aws', function(err, system) {
      assert(!err);
      assert(system);
      assert(_.isEqual(system, expected));
      done();
    });
  });
});

