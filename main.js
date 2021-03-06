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

var cmp = require('./compile')();
var map = require('./map')();
var editor = require('./edit')();



module.exports = function() {


  /**
   * compile a full abstract system definition
   *
   * path - path to the defintion files
   * platform - the platform to compile to curently one of:
   *            'local' || 'aws'
   * cb - callback
   */
  var compile = function compile(path, platform, cb) {
    cmp.compile(path, platform, function(err, abstractSystem) {
      if (err) { return cb(err); }
      map.map(path, platform, abstractSystem, function(err, system) {
        if (err) { return cb(err); }
        cb(null, system);
      });
    });
  };



  var edit = function(path, command, data, cb) {
    editor.edit(path, command, data, cb);
  };



  return {
    compile: compile,
    edit: edit
  };
};
 

